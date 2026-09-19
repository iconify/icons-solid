import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxo4hmbaa.css';
import '../../css/r/rf258g3jg.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="rxo4hmbaa"/><path class="rf258g3jg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:price-tag"} {...others} />);
}

export default Component;
