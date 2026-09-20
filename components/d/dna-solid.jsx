import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnxigjgcg.css';
import '../../css/r/rlw68tb9u.css';
import '../../css/s/sd_lm-bds.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hnxigjgcg"/><path class="rlw68tb9u"/><path class="sd_lm-bds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:dna-solid"} {...others} />);
}

export default Component;
