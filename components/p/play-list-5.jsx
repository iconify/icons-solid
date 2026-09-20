import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rae8lq5yr.css';
import '../../css/n/nsiiz-bec.css';
import '../../css/a/arn-f-bpt.css';
import '../../css/w/wx5voob3f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="rae8lq5yr"/><path class="nsiiz-bec"/><path class="arn-f-bpt"/><path class="wx5voob3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:play-list-5"} {...others} />);
}

export default Component;
