import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l9lf6el_g {
  fill: currentColor;
  d: path("M10.5 15h3l-.575-3.225q.5-.25.788-.725T14 10q0-.825-.587-1.412T12 8t-1.412.588T10 10q0 .575.288 1.05t.787.725zm1.5 7q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22");
}
</style><path class="l9lf6el_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:encrypted"} {...others} />);
}

export default Component;
