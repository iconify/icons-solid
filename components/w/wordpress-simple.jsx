import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw6ui7bhy.css';
import '../../css/s/syf0cfsom.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="kw6ui7bhy"/><path class="syf0cfsom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:wordpress-simple"} {...others} />);
}

export default Component;
