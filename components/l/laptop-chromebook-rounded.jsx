import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b4q_di8at {
  fill: currentColor;
  d: path("M3 17.308V6.154q0-.666.475-1.141t1.14-.475h14.77q.666 0 1.14.475T21 6.153v11.155h1.5q.213 0 .356.144q.144.143.144.356t-.144.357t-.356.143h-21q-.213 0-.356-.144T1 17.807t.144-.356t.356-.143zm7.385 0h3.23q.154 0 .27-.116q.115-.115.115-.269t-.115-.27t-.27-.114h-3.23q-.154 0-.27.111q-.115.112-.115.273t.116.273t.269.112");
}
</style><path class="b4q_di8at"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:laptop-chromebook-rounded"} {...others} />);
}

export default Component;
