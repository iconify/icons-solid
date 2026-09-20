import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7x5h9bzy.css';
import '../../css/l/lpmxo1cba.css';
import '../../css/o/ok1s67w0q.css';
import '../../css/u/uga0ovbvj.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s7x5h9bzy"/><path class="lpmxo1cba"/><path class="ok1s67w0q"/><path class="uga0ovbvj"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:south-korea"} {...others} />);
}

export default Component;
