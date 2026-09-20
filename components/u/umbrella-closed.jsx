import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzku4xb3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hzku4xb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:umbrella-closed"} {...others} />);
}

export default Component;
