import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7y8yu2wv.css';
import '../../css/q/q-8dq0bnw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f7y8yu2wv"/><path class="q-8dq0bnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:netlify-light"} {...others} />);
}

export default Component;
