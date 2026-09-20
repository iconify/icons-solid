import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exxlsgbrx.css';
import '../../css/s/senys3bzh.css';
import '../../css/b/by3-pxb1k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="exxlsgbrx"/><path class="senys3bzh"/><path class="by3-pxb1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-data-conversion-documents-2-bold"} {...others} />);
}

export default Component;
