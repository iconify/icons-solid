import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v15nc7ykw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v15nc7ykw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:ikea-solvinden"} {...others} />);
}

export default Component;
