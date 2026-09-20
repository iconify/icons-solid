import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7rjambcu.css';
import '../../css/a/au92l6bjr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c7rjambcu"/><path class="au92l6bjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:anubis"} {...others} />);
}

export default Component;
