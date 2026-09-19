import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwm6jac9w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gwm6jac9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:heading-h2"} {...others} />);
}

export default Component;
