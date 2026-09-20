import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ia39kttwv {
  fill: currentColor;
  d: path("M2.02 19L12 2l10 17zm9.48-3.404h1v-1.942h1.98v-1H12.5V10.73h-1v1.923H9.539v1H11.5z");
}
</style><path class="ia39kttwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:add-triangle-sharp"} {...others} />);
}

export default Component;
