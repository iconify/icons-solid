import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5fu9jbsw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h5fu9jbsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:atom-solid"} {...others} />);
}

export default Component;
