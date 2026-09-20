import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9ivmoblp.css';
import '../../css/j/jometib-e.css';
import '../../css/z/z8r02ubit.css';
import '../../css/b/b4zfkkndr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e9ivmoblp"/><path class="jometib-e"/><path class="z8r02ubit"/><path class="b4zfkkndr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:arbitrum-one"} {...others} />);
}

export default Component;
