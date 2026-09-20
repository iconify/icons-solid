import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evf4ks.css';
import '../../css/p/psjrum.css';
import '../../css/j/j3df0o.css';
import '../../css/u/uzlaax.css';
import '../../css/t/t5hnje.css';
import '../../css/s/so-from-66.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="evf4ks psjrum"/><path class="evf4ks j3df0o"/><path class="evf4ks uzlaax"/><path class="evf4ks t5hnje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:spotify"} {...others} />);
}

export default Component;
