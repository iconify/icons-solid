import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cn35t6oxs.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="cn35t6oxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:user-single-neutral-male-solid"} {...others} />);
}

export default Component;
