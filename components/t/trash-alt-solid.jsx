import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4he1pszq.css';
import '../../css/t/tsn023e7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h4he1pszq"/><path clip-rule="evenodd" class="tsn023e7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:trash-alt-solid"} {...others} />);
}

export default Component;
