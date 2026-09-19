import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cy5jeenne.css';
import '../../css/t/tkw3w5bpe.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="cy5jeenne"/><path class="tkw3w5bpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:build-twotone"} {...others} />);
}

export default Component;
