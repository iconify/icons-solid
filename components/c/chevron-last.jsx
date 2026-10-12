import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptks6rh3r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ptks6rh3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chevron-last"} {...others} />);
}

export default Component;
