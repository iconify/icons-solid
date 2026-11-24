import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_yi9saap.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n_yi9saap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:skip-forward-solid"} {...others} />);
}

export default Component;
