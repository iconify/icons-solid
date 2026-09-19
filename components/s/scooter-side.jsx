import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/avyldz2to.css';
import '../../css/e/etr3yzr0i.css';
import '../../css/q/q_5tlvw7r.css';
import '../../css/b/bhhizj98s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="avyldz2to"/><path class="etr3yzr0i"/><path class="q_5tlvw7r"/><path class="bhhizj98s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:scooter-side"} {...others} />);
}

export default Component;
