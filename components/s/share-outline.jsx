import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lil6jbckh.css';
import '../../css/l/lyck5hnje.css';
import '../../css/g/g-iywcc7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lil6jbckh"/><path clip-rule="evenodd" class="lyck5hnje"/><path clip-rule="evenodd" class="g-iywcc7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:share-outline"} {...others} />);
}

export default Component;
