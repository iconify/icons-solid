import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3cy5585s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b3cy5585s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:approximate"} {...others} />);
}

export default Component;
