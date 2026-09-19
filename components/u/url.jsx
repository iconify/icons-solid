import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4n_m3bat.css';
import '../../css/w/wa7qyq31a.css';
import '../../css/q/qasg3hbws.css';

const viewBox = {"width":13,"height":16};
const content = `<circle class="a4n_m3bat"/><circle class="wa7qyq31a"/><path class="qasg3hbws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:url"} {...others} />);
}

export default Component;
