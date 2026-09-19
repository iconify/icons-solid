import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itkqu9bwu.css';

const viewBox = {"width":1792,"height":1600};
const content = `<path class="itkqu9bwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:mail-forward"} {...others} />);
}

export default Component;
