import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g7jc2qb7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.5 22.443h5.75v-6.828H12.5zm0 9.942h5.75v-6.828H12.5zm8.625 0h5.75v-6.828h-5.75zm8.625 0h5.75v-6.828h-5.75zm-8.625-9.942h5.75v-6.828h-5.75zm8.625-6.828v6.828h5.75v-6.828z");
}

.ry7oldtls {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.5 24C2.5 12.1 12.1 2.5 24 2.5S45.5 12.1 45.5 24S35.9 45.5 24 45.5S2.5 35.9 2.5 24");
}
</style><path class="ry7oldtls"/><path class="g7jc2qb7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:benotes"} {...others} />);
}

export default Component;
