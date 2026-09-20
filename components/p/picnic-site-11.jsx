import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_ldfj9ec.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="n_ldfj9ec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:picnic-site-11"} {...others} />);
}

export default Component;
