import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdolnqbey.css';
import '../../css/q/qiz-9kb7a.css';
import '../../css/k/kkhe1jboc.css';
import '../../css/x/x4_9e9-hn.css';

const viewBox = {"width":800,"height":800};
const content = `<path class="fdolnqbey"/><path class="qiz-9kb7a"/><path class="kkhe1jboc"/><path class="x4_9e9-hn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:vanilla-extract"} {...others} />);
}

export default Component;
