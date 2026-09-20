import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njfdkhbvf.css';
import '../../css/f/fczeytlne.css';
import '../../css/x/xb5-t2qju.css';
import '../../css/v/vo71evf5d.css';
import '../../css/i/iwjpwmbrj.css';
import '../../css/z/z6oq4ccrx.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="njfdkhbvf"><circle class="fczeytlne"/><path class="xb5-t2qju"/></g><path class="vo71evf5d"/><circle class="iwjpwmbrj"/><path class="z6oq4ccrx"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:taurus"} {...others} />);
}

export default Component;
