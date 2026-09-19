import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0bq-7bdw.css';
import '../../css/j/jc-qmqbqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m0bq-7bdw"/><path class="jc-qmqbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:reader-follow-conversation"} {...others} />);
}

export default Component;
