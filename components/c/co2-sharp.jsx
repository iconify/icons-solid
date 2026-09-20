import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kflhi5bup {
  fill: currentColor;
  d: path("M10.308 14.692V9.308h4.384v5.384zm.884-.884h2.616v-3.616h-2.616zm-7.884.884V9.308h4.384v1.384h-.884v-.5H4.192v3.616h2.616v-.5h.884v1.384zm14 3v-3.076h3v-1.424h-3v-.884h3.884v3.077h-3v1.423h3v.884z");
}
</style><path class="kflhi5bup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:co2-sharp"} {...others} />);
}

export default Component;
