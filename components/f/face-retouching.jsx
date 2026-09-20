import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/q/qs6v78s3j.css';
import '../../css/m/mmw6b732y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="qs6v78s3j"/><path class="mmw6b732y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:face-retouching"} {...others} />);
}

export default Component;
