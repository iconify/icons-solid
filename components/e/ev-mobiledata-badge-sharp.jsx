import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o5xkc5bry {
  fill: currentColor;
  d: path("M5 17h6v-2H7v-2h3v-2H7V9h4V7H5zm9.5 0h2L19 7h-2l-1.5 6L14 7h-2zM1 21V3h22v18z");
}
</style><path class="o5xkc5bry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ev-mobiledata-badge-sharp"} {...others} />);
}

export default Component;
