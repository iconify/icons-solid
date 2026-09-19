import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgmhddevn.css';
import '../../css/u/ueg81y61d.css';
import '../../css/n/neag2rbvc.css';
import '../../css/u/uqlamj4tr.css';
import '../../css/b/bejlyabet.css';
import '../../css/x/xtvj63buk.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="lgmhddevn"/><path class="ueg81y61d"/><circle class="neag2rbvc"/><circle class="uqlamj4tr"/><circle class="bejlyabet"/><path class="xtvj63buk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-view"} {...others} />);
}

export default Component;
