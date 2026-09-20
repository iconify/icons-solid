import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9vb0jbzt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m9vb0jbzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:social-skype"} {...others} />);
}

export default Component;
