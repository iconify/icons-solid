import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8ke-ebvs.css';
import '../../css/v/vqijov7nf.css';
import '../../css/f/fopjc16sg.css';
import '../../css/w/w712zwbvu.css';
import '../../css/s/sy902qbmh.css';
import '../../css/i/i-gfm7fia.css';
import '../../css/w/w7b3aac8r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i8ke-ebvs"/><path class="vqijov7nf"/><path class="fopjc16sg"/><path class="w712zwbvu"/><path class="sy902qbmh"/><path class="i-gfm7fia"/><path class="w7b3aac8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:pig-nose"} {...others} />);
}

export default Component;
