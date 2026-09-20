import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3ym1vb4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t3ym1vb4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:check-radio-unchecked"} {...others} />);
}

export default Component;
