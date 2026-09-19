import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/idvi9abbj.css';
import '../../css/g/gfl6m_b2c.css';
import '../../css/k/kb5hnv1mt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="idvi9abbj"/><path class="gfl6m_b2c"/><path class="kb5hnv1mt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:flip-1-bold"} {...others} />);
}

export default Component;
