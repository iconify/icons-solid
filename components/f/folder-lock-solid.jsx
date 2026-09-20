import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1qmh6bea.css';
import '../../css/k/k52lm57aa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n1qmh6bea"/><path clip-rule="evenodd" class="k52lm57aa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:folder-lock-solid"} {...others} />);
}

export default Component;
