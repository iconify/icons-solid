import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ius3-6n0i.css';
import '../../css/s/srr8t7bum.css';
import '../../css/f/faq8qdvkq.css';
import '../../css/r/rneejsm5d.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ius3-6n0i"/><path class="srr8t7bum"/><path class="faq8qdvkq"/><path class="rneejsm5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:crown-twotone"} {...others} />);
}

export default Component;
