import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvzhdlynj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lvzhdlynj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:divide-equal"} {...others} />);
}

export default Component;
