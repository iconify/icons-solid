import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ff1i7tbml.css';
import '../../css/k/kcxyz-btg.css';
import '../../css/t/to-4dx7tn.css';
import '../../css/x/xi3p24bun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ff1i7tbml"/><path class="kcxyz-btg"/><path class="to-4dx7tn"/><path class="xi3p24bun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:comet-api"} {...others} />);
}

export default Component;
