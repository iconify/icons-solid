import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n753bnbkt.css';
import '../../css/n/nlgc3lb6w.css';
import '../../css/r/rsa_jfbjv.css';
import '../../css/l/l9l0kgbll.css';
import '../../css/f/fnwtfpoun.css';
import '../../css/v/vcrpexzic.css';
import '../../css/h/h9wjumbpm.css';
import '../../css/m/m_jg1cb6u.css';
import '../../css/u/ut561yb7b.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="n753bnbkt"/><path class="nlgc3lb6w"/><path class="rsa_jfbjv"/><path class="l9l0kgbll"/><path class="fnwtfpoun"/><path class="vcrpexzic"/><path class="h9wjumbpm"/><path class="m_jg1cb6u"/><path class="ut561yb7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:juce"} {...others} />);
}

export default Component;
