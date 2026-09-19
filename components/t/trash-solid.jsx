import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4he1pszq.css';
import '../../css/a/ag8l5kbvz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h4he1pszq"/><path clip-rule="evenodd" class="ag8l5kbvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:trash-solid"} {...others} />);
}

export default Component;
