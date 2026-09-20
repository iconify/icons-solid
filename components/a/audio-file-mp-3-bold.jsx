import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mr2q03bgv.css';
import '../../css/z/z00ni0b7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mr2q03bgv"/><path class="z00ni0b7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:audio-file-mp-3-bold"} {...others} />);
}

export default Component;
