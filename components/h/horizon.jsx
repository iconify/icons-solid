import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjdecabze.css';
import '../../css/v/vlj0scbpf.css';
import '../../css/d/d-2gb0bhq.css';
import '../../css/w/wi93bqmrk.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGMLGqBdhj"><path class="tjdecabze"/></clipPath><symbol id="SVGK9G88drL" viewBox="0 0 375 375"><circle class="vlj0scbpf"/><path class="d-2gb0bhq"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"/></path></symbol></defs><g clip-path="url(#SVGMLGqBdhj)"><use width="375" height="375" href="#SVGK9G88drL" transform="translate(68.5 104.5)"/></g><path class="wi93bqmrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:horizon"} {...others} />);
}

export default Component;
