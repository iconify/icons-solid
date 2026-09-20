import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ammq8ggrp.css';
import '../../css/n/nss1utbbu.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="ammq8ggrp"/><path class="nss1utbbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:farm-11"} {...others} />);
}

export default Component;
