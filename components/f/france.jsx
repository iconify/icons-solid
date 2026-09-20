import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnnw6covj.css';
import '../../css/t/tagoe6bqj.css';
import '../../css/t/t7qvu6bfh.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qnnw6covj"/><path class="tagoe6bqj"/><path class="t7qvu6bfh"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:france"} {...others} />);
}

export default Component;
