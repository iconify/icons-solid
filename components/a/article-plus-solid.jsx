import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_w_6xb3l.css';
import '../../css/f/f7n_6objg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p_w_6xb3l"/><path class="f7n_6objg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:article-plus-solid"} {...others} />);
}

export default Component;
