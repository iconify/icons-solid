import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxq-hubfm.css';
import '../../css/z/zylz4v1cy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dxq-hubfm"/><path class="zylz4v1cy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:notion-calendar"} {...others} />);
}

export default Component;
