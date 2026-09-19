import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj0bqhbrl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kj0bqhbrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:radio-unchecked"} {...others} />);
}

export default Component;
