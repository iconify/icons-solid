import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgd5uubak.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="sgd5uubak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:file-zipper"} {...others} />);
}

export default Component;
