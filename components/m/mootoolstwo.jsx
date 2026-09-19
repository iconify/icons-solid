import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk2erc5di.css';

const viewBox = {"width":1024,"height":614};
const content = `<path class="yk2erc5di"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:mootoolstwo"} {...others} />);
}

export default Component;
